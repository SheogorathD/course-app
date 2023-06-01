import { Divider, Layout } from "antd";
import "../style.scss";

const { Content, Sider } = Layout;

const CoursePage = () => {
  return (
    <>
      <Layout className="CoursePage">
        <Sider>
          <h2 className="CoursePage__completed">Виконано 4 з 16</h2>
          <Divider />
          <div className="CoursePage__theme">
            <p className="completed">тема урока</p>
            <p className="completed">тема урока</p>
            <p className="completed">тема урока</p>
            <p className="completed">тема урока</p>
            <p>тема урока</p>
            <p>тема урока</p>
            <p>тема урока</p>
            <p>тема урока</p>
            <p>тема урока</p>
            <p>тема урока</p>
            <p>тема урока</p>
            <p>тема урока</p>
            <p>тема урока</p>
            <p>тема урока</p>
            <p>тема урока</p>
            <p>тема урока</p>
            <p>тема урока</p>
          </div>
        </Sider>
        <Content></Content>
      </Layout>
    </>
  );
};

export default CoursePage;
