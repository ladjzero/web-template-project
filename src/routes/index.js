// Copyright 2018 caicloud authors. All rights reserved.

import Loadable from 'react-loadable';
import { Spin } from 'antd';

const ClusterListPage = Loadable({
  loader: () => import('../components/ClusterList'),
  loading: Spin,
});

const ClusterDetailPage = Loadable({
  loader: () => import('../components/ClusterDetail'),
  loading: Spin,
});

export default {
  path: '/x-clusters',
  name: 'X-Clusters',
  component: ClusterListPage,
  childRoutes: [
    {
      path: '/x-clusters/:name',
      name: 'X-Clusters-Detail',
      component: ClusterDetailPage,
    },
  ],
};
