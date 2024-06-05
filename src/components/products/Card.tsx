import { useRouter } from "next/router";
import Image from "next/image";

import { Button, Card, theme, Typography, Tag, Tooltip } from "antd";
const { Title, Paragraph } = Typography;
import { ArrowRightOutlined } from "@ant-design/icons";

import { PriceNameType, TMenuItem, TPriceOption } from "@/types/dish";
import styles from "../../styles/dishCard.module.css";

export const PlateCard = ({
  id,
  name,
  prices,
  bestSeller
}: TMenuItem) => {
  const router = useRouter();

  const { useToken } = theme;
  const { token } = useToken();

  return (
    <div className="">
      <Title key={id} level={4}>
        {name} - <span style={{ color: token.colorTextSecondary }}>${prices}</span>        
      </Title>
    </div>
  );
};
