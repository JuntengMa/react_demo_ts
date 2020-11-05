import * as React from 'react';
import { testAxios } from '../../api/index.js';
export interface TestProps {
}

export class Test extends React.Component<TestProps> {

  getNews = async () => {
    await testAxios({})
  }
  componentDidMount() {
    this.getNews()
  }

  public render() {
    return (
      <div>

      </div>
    );
  }
}
