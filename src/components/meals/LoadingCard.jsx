import { Card, CardContent, Skeleton } from "@mui/material";

export default function LoadingCard() {
  return (
    <Card>
      <Skeleton
        variant="rectangular"
        height={250}
      />
      <CardContent>
        <Skeleton
          variant="text"
          height={20}
          width="80%"
        />
      </CardContent>
    </Card>
  );
}
