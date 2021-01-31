import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Footer from './Footer';


function App() {
    return (
            <div className="container">
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link">Start Bootstrap</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="jumbotron">
                    <h1>Jumbotron with React</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <button type="button" className="btn btn-primary">Call to Action!
                    </button>
                </div>
                <div className="row">
                    <div className="col-3">
                        <div className="Card" style={{ witdh: 600 }}>
                            <img className="card-img-top" src="https://i.pinimg.com/originals/cd/a8/ff/cda8ff1bcb7f335719b146d61f6f494a.png" alt="Card imge" style={{ with: 100 }}></img>
                            <div className="card-body">
                                <h4 className="card-title">Card Title</h4>
                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                                <a href="#" class="btn btn-primary stretched-link">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="Card" style={{ witdh: 400 }}>
                            <img className="card-img-top" src="https://i.pinimg.com/originals/cd/a8/ff/cda8ff1bcb7f335719b146d61f6f494a.png" alt="Card imge" style={{ with: 100 }}></img>
                            <div className="card-body">
                                <h4 className="card-title">Card Title</h4>
                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                                <a href="#" class="btn btn-primary stretched-link">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="Card" style={{ witdh: 400 }}>
                            <img className="card-img-top" src="https://i.pinimg.com/originals/cd/a8/ff/cda8ff1bcb7f335719b146d61f6f494a.png" alt="Card imge" style={{ with: 100 }}></img>
                            <div className="card-body">
                                <h4 className="card-title">Card Title</h4>
                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                                <a href="#" class="btn btn-primary stretched-link">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="Card" style={{ witdh: 400 }}>
                            <img className="card-img-top" src="https://i.pinimg.com/originals/cd/a8/ff/cda8ff1bcb7f335719b146d61f6f494a.png" alt="Card imge" style={{ with: 100 }}></img>
                            <div className="card-body">
                                <h4 className="card-title">Card Title</h4>
                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                                <a href="#" class="btn btn-primary stretched-link">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer copyright="Copyright © Your Website 2021" />
           </div>

    );
}
export default App;


