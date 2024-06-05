import { useEffect } from "react";
import { useRouter } from "next/router";

import { animate } from "motion";
import { Button } from "antd";
import {
  AimOutlined,
  ClockCircleOutlined,
  PhoneOutlined,
  MailOutlined,
  ReadOutlined,
} from "@ant-design/icons";

import { HomeLayout } from "../components/layouts/HomeLayout";
import styles from "../styles/home.module.css";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    animate(".homeContentAnimation", { opacity: [0, 1] }, { duration: 0.9 });
  }, []);

  return (
    <HomeLayout
      title="A lo rico rico"
      pageDescription="Donde cada sabor cuenta una historia"
      imageUrl="/images/bg-home.jpeg"
    >
      <main className={styles.mainContainer}>
        <img
          className={styles.img}
          src="/images/bg-home3.jpeg"
          alt="restaurant dish"
        />

        <div className={"homeContentAnimation"}>
          <section className={styles.restaurantInformation}>
            <div className={styles.informationContainer}>
              {/* <div>
                <AimOutlined /> Carretera Central, Guanajay. Artemisa
              </div> */}
              <div>
                <ClockCircleOutlined /> 10:00am - 11:00pm
              </div>
            </div>
            <div className={styles.informationContainer}>
              <div>
                <PhoneOutlined /> <span>+53 58402241</span>
              </div>
              {/* <div>
                <MailOutlined /> aloricorico@gmail.com
              </div> */}
            </div>
          </section>

          <section className={styles.titleContainer}>
            <h1 className={styles.title}>
              Donde cada sabor cuenta una historia
            </h1>
            <Button
              type="primary"
              size="large"
              onClick={() => router.push("/dishes")}
            >
              <ReadOutlined />
              Menú
            </Button>
          </section>
        </div>
      </main>
    </HomeLayout>
  );
};

export default HomePage;
