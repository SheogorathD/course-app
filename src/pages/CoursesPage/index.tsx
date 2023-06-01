import { Card, Collapse, Layout } from "antd";
import { NavLink } from "react-router-dom";
import { COURSES } from "@/router/routes.js";

import "./style.scss";

const { Panel } = Collapse;
const { Sider, Content } = Layout;

const CoursesPage = () => {
  return (
    <>
      <Layout className="CoursesPage">
        <Sider width={"10rem"}>
          <Collapse>
            <Panel header="Мови програмування" key="1">
              <ul>
                <li>
                  <a href="#">HTML & CSS</a>
                </li>
                <li>
                  <a href="#">JavaScript</a>
                </li>
                <li>
                  <a href="#">C#</a>
                </li>
                <li>
                  <a href="#">Python</a>
                </li>
                <li>
                  <a href="#">C++</a>
                </li>
                <li>
                  <a href="#">Java</a>
                </li>
                <li>
                  <a href="#">PHP</a>
                </li>
              </ul>
            </Panel>

            <Panel header="Тематика" key="2">
              <ul>
                <li>
                  <a href="#">Web development</a>
                </li>
                <li>
                  <a href="#">Java development</a>
                </li>
                <li>
                  <a href="#">.Net development</a>
                </li>
                <li>
                  <a href="#">C++ development</a>
                </li>
                <li>
                  <a href="#">Python development</a>
                </li>
                <li>
                  <a href="#">PHP development</a>
                </li>
              </ul>
            </Panel>
          </Collapse>
        </Sider>
        <Content>
          <NavLink to={COURSES + "course"}>
            <Card title="Вивчення HTML">
              <p>
                Почніть навчання з базового html - це важлива частина для
                будування або налаштування веб сторінок
              </p>
            </Card>
          </NavLink>

          <NavLink to={COURSES + "course"}>
            <Card title="Вивчення CSS">
              <p>
                Почніть навчання з базового css - це важлива частина для
                стилізування або веб сторінок
              </p>
            </Card>
          </NavLink>

          <NavLink to={COURSES + "course"}>
            <Card title="Вивчення JavaScript">
              <p>
                Почніть навчання з базового JavaScript - це важлива частина для
                будування анімацій та налаштування веб сторінок
              </p>
            </Card>
          </NavLink>

          <NavLink to={COURSES + "course"}>
            <Card title="Вивчення C++">
              <p>
                Почніть навчання з базового C++ якщо ви хочете розробляти ігри
                або певні професійні програми
              </p>
            </Card>
          </NavLink>

          <NavLink to={COURSES + "course"}>
            <Card title="Вивчення Python">
              <p>
                Почніть навчання з базового Python. Вибравши його, ви навчитеся
                розробляти базові програми та дізнаєтеся усього необхідного, щоб
                розвиватися в цьому напрямку
              </p>
            </Card>
          </NavLink>

          <NavLink to={COURSES + "course"}>
            <Card title="Вивчення Java">
              <p>
                Почніть навчання з базового Java якщо ви хочете розробляти ігри
                або певні професійні програми
              </p>
            </Card>
          </NavLink>

          <NavLink to={COURSES + "course"}>
            <Card title="Вивчення PHP">
              <p>
                Почніть навчання з базового PHP - це важлива частина для
                будування анімацій та налаштування веб сторінок
              </p>
            </Card>
          </NavLink>

          <NavLink to={COURSES + "course"}>
            <Card title="Вивчення C#">
              <p>
                Почніть навчання з базового C# якщо ви хочете розробляти ігри
                або певні професійні програми або ж розробляти бек-енд частину
                для веб-сайтів.
              </p>
            </Card>
          </NavLink>
        </Content>
      </Layout>
    </>
  );
};

export default CoursesPage;
