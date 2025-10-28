import { Button } from "@repo/ui/atoms";

export default function Root(): React.JSX.Element {
  return (
    <div>
      <h1>Web page</h1>
      <Button size="lg" variant="primary">
        Click me
      </Button>
    </div>
  );
}
