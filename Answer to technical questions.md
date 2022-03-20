1) 13-14 hours.
If I had more time I would have loved to:
Add more test cases.  
Fetch more than only 20 entries from API and spread the results into multiple pages (1,2,3,...n)
Add more sorting options.
Introduce Advanced Search, where user can filter results by genre, publisher, language, etc.
Add voice search option: allow user to search for books by using speech-to-text feature
Work more on design and accessibility of application
2)
React state hooks, new featured added in react 16.8. React hooks have the capability of tapping into the state without using classes. This results in having simpler and shorter code (and no need to worry about using "this" keyword anymore). Take a look at the code snippet below and how I utilized the Effect Hook, a new featured introduced in React 16.8.

const Main = () => {
	const [data, setData] = useState({ items: [] });
	const [bookCards, setBookCards] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [loading, setLoading] = useState(false);
	const [order, setOrder] = useState('');
	
	useEffect(() => {
		//Effect Hook allows us to perform 'side effects' in function components.
		//you can think of it as a combination of 'componentDidMount', 'componentDidUpdate', and
		//'componentWillUnmount' combined.
		//in this case everytime one of our states: 'data' or 'order' is updated, it triggers the code 
		//inside useEffect(), which is responsible for creating a list of cards and sorting them if specified 
		//by user
	}, [data, order])
	} 
3) Performance issues are a common when when dealing with applications that deal with a large amount of concurrent data. 
 Chrome's performance tab is one of the tools I use to audit web page performance and analyze its runtime in depth.
I used performance tool for the book searching tool since my page's loading time would vary greatly depending on the search query. 
4) Caching. Since there are requests that produce the same response (searching for the same title multiple times) a cached version of its response will reduce excessive database queries.
5)
{"firstName":"Arman", "lastName":"Golmakan", "email":"arman.golmakan@gmail.com", "favouriteLanguage":"JavaScript"}