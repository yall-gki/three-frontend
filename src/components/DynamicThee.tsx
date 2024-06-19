import dynamic from "next/dynamic";

const DynamicThreeModelComponent = dynamic(
  () => import("../components/ThreeLoader"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false, // Placeholder while component is loading
  }
);

export default DynamicThreeModelComponent;
