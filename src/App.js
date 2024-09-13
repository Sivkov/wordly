import Field from './table/field';
import { GameProvider } from './table/gameContext.js'; // Импортируем провайдер контекста



const App = () => {
	//const dispatch = useDispatch();
	return (
		<GameProvider>
			<div className="App">
				<Field />
			</div>
		</GameProvider>

	);

}

export default App;