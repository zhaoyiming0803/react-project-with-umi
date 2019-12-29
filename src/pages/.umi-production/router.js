import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import { routerRedux, dynamic as _dvaDynamic } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () => import('../App'),
        })
      : require('../App').default,
    routes: [
      {
        path: '/',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../Index'),
            })
          : require('../Index').default,
        exact: true,
      },
      {
        path: '/coupon',
        routes: [
          {
            path: '/coupon/list',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../coupon/List'),
                })
              : require('../coupon/List').default,
            exact: true,
          },
          {
            path: '/coupon/add',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../coupon/Add'),
                })
              : require('../coupon/Add').default,
            exact: true,
          },
        ],
      },
    ],
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
