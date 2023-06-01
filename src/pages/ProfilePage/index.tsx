import { Card, Progress } from "antd";
import "./styles.scss";

const ProfilePage = () => {
  return (
    <>
      <div className="ProfilePage">
        <h2 className="ProfilePage__title">Мої курси</h2>

        <div className="ProfilePage__courses">
          <Card>
            <span>Course Title</span>
            <div className="ProfilePage__course-progress">
              <Progress percent={30} />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
