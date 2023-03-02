import { withLayout } from "@/layout/Layout";
import axios from "axios";
import { GetStaticProps } from "next";
import { MenuItem } from "@/interfaces/menu.interfaces";

function Course({ menu }: CourseProps): JSX.Element {

  return (
    <>
    </>
  );
}

export default withLayout(Course);

export const getStaticProps: GetStaticProps<CourseProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<CourseProps[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  );
  return {
    props: {
      menu,
      firstCategory
    }
  };
};
interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: string;
}
