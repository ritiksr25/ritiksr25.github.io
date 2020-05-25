import Link from "next/link";
import { Result, Button } from "antd";

const Custom404 = () => {
  return (
    <Result
      status="404"
      title="Oops! Seems like you are lost:)"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link href="/">
          <Button type="primary">Home</Button>
        </Link>
      }
    />
  );
};

export default Custom404;
