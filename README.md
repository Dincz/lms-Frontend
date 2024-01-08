# Frontend LMS

###Set-up Instructions

1.Clone the project
```
git clone https://github.com/Dincz/lms-Frontend.git
```

2.Get into the Directory
```
cd lms-frontend
```

3.Install Packages
```
npm install
```

4.run server
```
npm run server
```

###Install TailwindCSS

1.Install Tailwind
```
npm install -D tailwindcss
```
2.Initilize Tailwind-Config file
```
npx tailwindcss init
```
3.Update File extension to Tailwind-config file
```
"./src/**/*.{html,js,jsx,tx,tsx}"
```

4.Add tailwind directive to the index.css  file
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
###Adding plugins and dependencies
```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

###Configure auto-import sort Es-lint

1.Install Simple import sort
```
npm i -D eslint-plugin-simple-import-sort
```


2.Add Rules in eslintic.cjs
```
'simple-import-sort/imports':'error',
```

3.Add plugin in eslintic.cjs
```
[....,'simple-import-sort']
```

4. To auto import sort in settings Configure Settings.json(VsCode)
```
 "editor.codeActionsOnSave":{
    "source.fixAll.eslint": true

```
