import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

const someProps = {
  text: "Hello",
};

const array = [1, 2, 3, 4, 5];

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <MyNewComponent {...someProps} color="red" />
      {array.map((item) => (
        <MyNewComponent
          {...someProps}
          key={Math.random().toString()}
          color="red"
        />
      ))}
      {/* {array.map((item) => (
        <MyNewComponent key={item} color="red" {...someProps} />
      ))} */}
    </main>
  );
}

const MyNewComponent = ({ text, color }) => {
  return (
    <div>
      {text}-{color}
    </div>
  );
};
