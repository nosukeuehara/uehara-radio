import Footer from "@/components/Footer";
import InfoPage from "@/components/InfoPage";
import Letter from "@/components/Letter";
import PageTop from "@/components/PageTop";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <div>
      <PageTop />
      <Profile />
      <Letter />
      <InfoPage />
      <Footer />
    </div>
  );
}
