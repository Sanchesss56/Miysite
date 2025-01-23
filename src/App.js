<<<<<<< HEAD
function App() {
  const [activeTab, setActiveTab] = React.useState('image');

  const features = [
    {
      icon: React.createElement(Edit, { className: "text-blue-600 w-12 h-12" }),
      title: 'Professional Editing',
      description: 'Transform photos and videos with intuitive tools'
    },
    {
      icon: React.createElement(Share2, { className: "text-green-600 w-12 h-12" }),
      title: 'Instant Sharing',
      description: 'Share content with a single click across social platforms'
    },
    {
      icon: React.createElement(Download, { className: "text-purple-600 w-12 h-12" }),
      title: 'Fast Download',
      description: 'Download media in high quality without losing sharpness'
    }
  ];

  return React.createElement('div', { className: "bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen" }, [
    // Header
    React.createElement('header', { className: "container mx-auto px-4 py-6 flex justify-between items-center" }, [
      React.createElement('div', { className: "flex items-center" }, [
        React.createElement(Image, { className: "w-10 h-10 mr-2 text-blue-600" }),
        React.createElement('h1', { className: "text-2xl font-bold text-gray-800" }, "SuperPsix")
      ]),
      React.createElement('nav', null, [
        React.createElement('button', { className: "px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" }, "Login")
      ])
    ]),

    // Main content
    React.createElement('main', { className: "container mx-auto px-4 py-12" }, [
      // First section
      React.createElement('section', { className: "text-center mb-16" }, [
        React.createElement('h2', { className: "text-4xl font-bold mb-4 text-gray-800" }, "Create Amazing Content in Seconds"),
        React.createElement('p', { className: "text-xl text-gray-600 mb-8" }, "Professional online photo and video editor for bloggers, designers, and marketers"),
        
        React.createElement('div', { className: "bg-white shadow-2xl rounded-2xl p-6 max-w-2xl mx-auto" }, [
          React.createElement('div', { className: "flex justify-center mb-4" }, [
            React.createElement('button', { 
              onClick: () => setActiveTab('image'),
              className: `mx-2 px-4 py-2 rounded-lg ${activeTab === 'image' ? 'bg-blue-500 text-white' : 'bg-gray-100'}` 
            }, "Photo"),
            React.createElement('button', { 
              onClick: () => setActiveTab('video'),
              className: `mx-2 px-4 py-2 rounded-lg ${activeTab === 'video' ? 'bg-blue-500 text-white' : 'bg-gray-100'}` 
            }, "Video")
          ]),

          React.createElement('div', { className: "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center" }, [
            React.createElement('input', { 
              type: "file", 
              accept: activeTab === 'image' ? 'image/*' : 'video/*',
              className: "hidden", 
              id: "mediaUpload" 
            }),
            React.createElement('label', { 
              htmlFor: "mediaUpload", 
              className: "cursor-pointer flex flex-col items-center" 
            }, [
              React.createElement(Upload, { size: 50, className: "text-gray-400 mb-4" }),
              React.createElement('p', { className: "text-gray-600" }, `Upload ${activeTab === 'image' ? 'photo' : 'video'}`)
            ])
          ])
        ])
      ]),

      // Features section
      React.createElement('section', { className: "grid md:grid-cols-3 gap-8 mb-16" }, 
        features.map((feature, index) => 
          React.createElement('div', { 
            key: index, 
            className: "bg-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform"
          }, [
            feature.icon,
            React.createElement('h3', { className: "text-xl font-semibold mt-4 mb-2" }, feature.title),
            React.createElement('p', { className: "text-gray-600" }, feature.description)
          ])
        )
      ),

      // Call to action section
      React.createElement('section', { className: "text-center bg-white rounded-2xl p-12 shadow-xl" }, [
        React.createElement('h2', { className: "text-3xl font-bold mb-6" }, "Get Started for Free!"),
        React.createElement('div', { className: "flex justify-center space-x-4" }, [
          React.createElement('button', { className: "px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600" }, "Create Account"),
          React.createElement('button', { className: "px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50" }, "Demo Version")
        ])
      ])
    ]),

    // Footer
    React.createElement('footer', { className: "bg-gray-800 text-white py-12" }, [
      React.createElement('div', { className: "container mx-auto px-4 grid md:grid-cols-4 gap-8" }, [
        React.createElement('div', null, [
          React.createElement('h4', { className: "font-bold mb-4" }, "About"),
          React.createElement('ul', null, [
            React.createElement('li', null, "About Us"),
            React.createElement('li', null, "Team"),
            React.createElement('li', null, "Careers")
          ])
        ]),
        // Остальные колонки футера аналогично
      ])
    ])
  ]);
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> 192975b (Initial commit)
