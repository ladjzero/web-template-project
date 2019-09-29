import gql from 'graphql-tag';

export default gql`
  query($nid: ID!) {
    node(nid: $nid) {
      # 2.9 后 RCluster 改为了 Cluster
      ... on RCluster {
        name
      }
    }
  }
`;
