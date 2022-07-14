import  AddRecipe  from '../containers/AddRecipe';
import RecipeList from '../containers/RecipeList';
import './App.css';

function App() {
  return (
    <div className="App">
      <AddRecipe/>
      <RecipeList/>
    </div>
  );
}

export default App;
