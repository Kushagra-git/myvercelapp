import MultiComponent, { MultiSmallComponent2 } from "./components/MultiComponent"
import MyHeading from "./components/MyHeading"
function App(){
 return <div>
  <MyHeading />
  <MultiComponent name = "Kushagra" text = "Learnt props"/>
  <MultiSmallComponent2 />
  <h1>
    Welcome To react!
  </h1>
 </div>
}

//Tip#1a : anything in curly bracraces {} is JS
//Tip#1b :js-jsx are same
//Tip#1c :js for logic, jsx for adding components and html tags
//Tip#1d :jsx only return one html component
//Tip#1e : so return wrapper <> </> or <Fragment> </Fragment>
//Tip#1f :everything 3pa in package.json dependencies
//Tip#1g : smallcase tag- html and uppercase tags - react components
//Tip#1h : components created - function based(stateless ), class based (stateful)
//tip#3b : import similarly like exporting
export default App