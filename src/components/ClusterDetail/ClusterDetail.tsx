import React from 'react';
import { Query } from 'react-apollo';
import { Spin } from 'antd';
import query from './query';

type ClusterDetailProps = {
  params: {
    name: string
  }
}

export default function ClusterDetail({ params }: ClusterDetailProps) {
  return (
    <Query
      query={query}
      variables={{ nid: `RCluster:${params.name}` /* v2.9 后 RCluster 改为 Cluster */ }}
    >
      {
        ({ data, loading }) => {
          if (loading) {
            return <Spin />
          }

          return (
            <span>
              cluster name is {data.node.name}
            </span>
          )
        }
      }
    </Query>
  );
}
