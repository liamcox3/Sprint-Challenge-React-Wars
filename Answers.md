# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

It is a ui library that lets you change data in small ways by using State. You can build components and scale up applications more efficently.

1. Describe component state.

State is a variable that holds data that can change when a user triggers an event listener.
example code is (let [state, setState] = useState([]))

1. Describe props.

It stands for properties and can hold data that is passed down to child components. You pass down props when you render the component and the sytex looks kind of like attributes in html.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side effects are types of code that run outside the scope of the function its being called in. You can use a useEffect hook to have it watch for changes in a component via the dependency array and when the change occurs the component will update.
