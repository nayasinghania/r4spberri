import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type LinkProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkProps) {
  return (
    <a href={url}>
      <br />
      <Card className="text-center hover:opacity-70 bg-gray-600/30">
        {title}
      </Card>
    </a>
  );
}
