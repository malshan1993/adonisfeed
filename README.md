# Adonis Feed

Register provider
````
const providers = [
  'adonisfeed/provider/Feed',
]
````
Register aliases 
````
const aliases = {
  Feed: 'Adonis/Addons/AdonisFeed'
}
````

## Usage

````
const feed = use('Feed');
````

Single 
````
let response = await feed.make('http://example.com/feed.rss');
````

Multiple
````
let response = await feed.make(['http://example1.com/feed.rss', 'http://example2.com/feed.rss']);
````


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.