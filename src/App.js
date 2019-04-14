import React, { Component } from 'react';

// コンテナ読み込み
import ResponsiveDrawer from './containers/ResponsiveDrawer.js';
import Info from './containers/Info.js';

// 共通スタイル読み込み
import './App.css';

// Route関連
import { Route, Switch } from 'react-router-dom';

// 不明なRouteは全てNotFound
const NotFound = () => {
  return (
    <h2>ページが見つかりません</h2>
  )
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <ResponsiveDrawer className="ResponsiveDrawer">
          <Switch>
            <Route exact path="/" component={Info} />
            <Route component={NotFound} />
          </Switch>
        </ResponsiveDrawer>
      </div>
    );
  }
}


// React-Router情報取得
export default App;
