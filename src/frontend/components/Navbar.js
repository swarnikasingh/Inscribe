import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
<<<<<<< HEAD
=======
import market from "./market.png";
>>>>>>> df3666e587ab5337be4b9fb290ac1fc36a9fffab

const Navigation = ({ web3Handler, account }) => {
  return (
    <Navbar className="bg-black">
<<<<<<< HEAD
      <Container className="flex justify-between items-center">
        <Navbar.Brand className="text-white">&nbsp; EduNFT</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/new-home" className="text-white ml-10">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-white">
              DashBoard
            </Nav.Link>
            <Nav.Link as={Link} to="/create" className="text-white">
              Create
            </Nav.Link>
            <Nav.Link as={Link} to="/my-listed-items" className="text-white">
              My Listed Items
            </Nav.Link>
            <Nav.Link as={Link} to="/my-purchases" className="text-white">
              My Purchases
            </Nav.Link>
          </Nav>
          <Nav>
            {account ? (
              <Nav.Link
                href={`https://etherscan.io/address/${account}`}
                target="_blank"
                rel="noopener noreferrer"
                className="button nav-button btn-sm mx-4"
              >
                <Button variant="outline-light">
                  {account.slice(0, 5) + "..." + account.slice(38, 42)}
                </Button>
              </Nav.Link>
            ) : (
              <Button onClick={web3Handler} variant="outline-light">
                Connect Wallet
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

=======
      <Container>
        <Navbar.Brand className="text-white">&nbsp; EduNFT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/new-home" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/create" className="text-white">
              Create
            </Nav.Link>
            <Nav.Link as={Link} to="/my-listed-items" className="text-white">
              My Listed Items
            </Nav.Link>
            <Nav.Link as={Link} to="/my-purchases" className="text-white">
              My Purchases
            </Nav.Link>
          </Nav>
          <Nav>
            {account ? (
              <Nav.Link
                href={`https://etherscan.io/address/${account}`}
                target="_blank"
                rel="noopener noreferrer"
                className="button nav-button btn-sm mx-4"
              >
                <Button variant="outline-light">
                  {account.slice(0, 5) + "..." + account.slice(38, 42)}
                </Button>
              </Nav.Link>
            ) : (
              <Button onClick={web3Handler} variant="outline-light">
                Connect Wallet
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

>>>>>>> df3666e587ab5337be4b9fb290ac1fc36a9fffab
export default Navigation;
