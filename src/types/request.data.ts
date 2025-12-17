export type RequestItem = {
  id: number;
  icon: string;
  title: string;
  description: string;
};
import checkmark from "../../public/images/All/checkmark.png";

const requestData: RequestItem[] = [
  {
    id: 1,
    icon: checkmark,
    title: "For Free",
    description:
      "Your request is 100% free and you are allowed to start requests in all categories.",
  },
  {
    id: 2,
    icon: checkmark,
    title: "Non-Binding",
    description:
      "Your request is non-binding. Whether you want to place an order is your free decision.",
  },
  {
    id: 3,
    icon: checkmark,
    title: "Verified Providers",
    description:
      "Thanks to quality controls and reviews from thousands of users, you can be on the safe side.",
  },
];

export default requestData;
