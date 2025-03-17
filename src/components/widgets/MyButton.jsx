import { Button } from "@/components/ui/button";
import { useDebouncedCallback } from "use-debounce";

export default function MyButton({ children, onClick, debounce = 500, ...props }) {
  const debouncedOnClick = useDebouncedCallback(onClick, debounce);
  return (
    <Button {...props} onClick={debouncedOnClick}>
      {children}
    </Button>
  );
}
