import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { data } from "./data";
import { Nav } from "./components/Nav";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header>
          <Nav />
        </Header>
        <Layout>
          <Content>
            <Routes>
              {data.map((obj, id) => (
                <Route key={id} path={obj.route} element={obj.element} />
              ))}
            </Routes>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </Router>
  );
}

export default App;
