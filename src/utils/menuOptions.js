import {
  IconIceCream2,
  IconGlassFull,
  IconMeat,
  IconSalad,
  IconCarrot,
  IconPizza,
  Icon123,
  IconMeeple,
} from "@tabler/icons-react";

export const menuOptions = [
  {
    key: "picaderas",
    icon: <IconMeat size={32} />,
    label: <a href="#picaderas">Picaderas</a>,
  },
  {
    key: "pizzas",
    icon: <IconPizza size={32} />,
    label: <a href="#pizzas">Pizzas</a>,
  },
  {
    key: "main dishes",
    icon: <IconMeat size={32} />,
    label: <a href="#main dishes">Main dishes</a>,
  },
  {
    key: "beverages",
    icon: <IconGlassFull size={32} />,
    label: <a href="#beverages">Beverages</a>,
  },
  {
    key: "deserts",
    icon: <IconIceCream2 size={32} />,
    label: <a href="#deserts">Desserts</a>,
  },
];
