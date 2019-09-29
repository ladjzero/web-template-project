import React from 'react';
import { Query } from 'react-apollo';
import { Spin } from 'antd';
import { Link } from 'react-router';
import query from './query';
import styles from './style.m.less';

export default function ClusterList({ children }) {
  if (children) {
    return children;
  }

  return (
    <Query
      query={query}
    >
      {
        ({ data, loading }) => {
          if (loading) {
            return <Spin />
          }

          return (
            <>
              cluster list:
            <ol className={styles.list}>
              {
                data.clusterCollection.nodes.map(({ name, phase }) => (
                  <li key={name}>{name}, status: {phase} <Link to={`/x-clusters/${name}`}>detail</Link></li>
                ))
              }
            </ol>
            </>
          )
        }
      }
    </Query>
  );
}
