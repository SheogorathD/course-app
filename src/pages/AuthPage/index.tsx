import { Button, Form, Input, Radio, Tabs, TabsProps } from "antd";
import "./style.scss";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Реєстрація",
    children: (
      <>
        <Form.Item name="userName" label="Ім’я користувача" required>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" required>
          <Input type="email" />
        </Form.Item>
        <Form.Item name="phoneNumber" label="Номер телефону" required>
          <Input type="tel" />
        </Form.Item>
        <Form.Item name="password" label="Пароль" required>
          <Input type="password" />
        </Form.Item>

        <Form.Item>
          <Radio.Group>
            <Radio value={1}>Вчитель</Radio>
            <Radio value={2}>Студент</Radio>
          </Radio.Group>
        </Form.Item>

        <Button htmlType="submit" type="primary">
          Зареєструватися
        </Button>
      </>
    ),
  },
  {
    key: "2",
    label: "Логін",
    children: (
      <>
        <Form.Item name="userName" label="E-mail/Нік користувача" required>
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Пароль" required>
          <Input type="password" />
        </Form.Item>

        <Button htmlType="submit" type="primary">
          Увійти
        </Button>
      </>
    ),
  },
];

const AuthPage = () => {
  const [form] = Form.useForm();

  const onFinish = (): void => {
    const a = 0;
  };

  return (
    <div className="AuthBlock">
      <div className="AuthBlock__container">
        <Form
          className="AuthPage__form"
          layout="vertical"
          form={form}
          onFinish={onFinish}
          requiredMark={false}
        >
          <Tabs items={items} />
        </Form>
      </div>
    </div>
  );
};

export default AuthPage;
