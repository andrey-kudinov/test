import {
  Section,
  SocialNetworks,
  Cover,
  BuyMeCoffee,
  Title,
} from "../../components";

export default function Home() {
  return (
    <div>
      <Section>
        <Cover title="Andrei <br/> Zakroev" />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>New Post</Title>
      </Section>
    </div>
  );
}
