                import React from 'react'
                import { Link } from 'react-router-dom';
                import { useSelector } from 'react-redux';
                const MainLayout = ({children}) => {

                  const count=useSelector(state => state.counter)
                  
                    return ( 

                        <>
                        
                        <header>
                       
                        <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
                          
                          <div class="container-fluid">
                            
                            
                        <div>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <Link className="nav-link" to='/'>الرئيسية</Link>
                                </li>
                                <li class="nav-item">
                                  <Link className="nav-link" to='/aboutus'>حولنا</Link>
                                </li>
                                <li class="nav-item">
                                <Link className="nav-link" to='/callus'>اتصل بنا</Link>
                                </li>
                              </ul>
                              </div>
    
    
     
                            <div class="d-flex align-items-center">
                            
                            

                              <div class="dropdown">
                              
                                  <i class="fas fa-bell"></i>
                                  <span class="badge rounded-pill badge-notification bg-danger">{count}</span>
                                
                                
                              </div>
                              
                              
                            </div>
                            
                          </div>
                          
                        </nav>
 

                        </header>
                        <main className='main'>
                        {children}
                        
                        </main>
                                    
                                       
                      
                        
                        <footer class='mainFooter'>
   
        <div class="socialIcons">
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-snapchat"></i></a>
            <a href=""><i class="bi bi-youtube"></i></a>  
    </div>
    <div class="footerBottom">
        <p>Copyright &copy;2024; Designed by <span class="designer">khaled</span></p>
    </div>
</footer>
    
                       
                          
                        </>
                    );
                }
                
                export default MainLayout;