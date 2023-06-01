import { Button, Form, Input } from "antd";

import "./styles.scss";

const { TextArea } = Input;

const AddCoursePage = () => {
  return (
    <div className="AddCourse">
      <h3>
        <b>Створення курсу</b>
      </h3>
      <ul>
        <li>
          <Form layout="vertical">
            <Form.Item name="course_name" label="Назва курсу">
              <Input />
            </Form.Item>

            <Form.Item name="course_desc" label="Oпис курсу">
              <TextArea />
            </Form.Item>

            <Form.Item
              name="course_tech"
              label="Технології, які будуть в курсі"
            >
              <Input />
            </Form.Item>

            <Form.Item name="course_teacher" label="Викладач курсу">
              <Input />
            </Form.Item>

            <Form.Item name="course_org" label="Організатор курсу">
              <Input />
            </Form.Item>

            <Button type="primary" style={{ marginRight: "2rem" }}>
              Створити курс
            </Button>
            <Button type="primary">Очистити форму</Button>
          </Form>
        </li>
      </ul>
    </div>
  );
};

export default AddCoursePage;
