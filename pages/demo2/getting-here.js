// pages/demo2/getting-here.js
import HeritageHeader from '../../components/HeritageHeader';
import GettingHere from '../../components/GettingHere';
import HeritageFooter from '../../components/HeritageFooter';

export default function GettingHereHeritage() {
  return (
    <main className="min-h-screen bg-white">
      <HeritageHeader />
      <GettingHere variant="heritage" />
      <HeritageFooter />
    </main>
  );
}
