export default function Footer(){
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div>© {new Date().getFullYear()} OSDC demo. For demonstration only.</div>
        <div className="small">Images: add your own CC/owned images in <code>/public</code> or keep gradients.</div>
      </div>
    </footer>
  );
}