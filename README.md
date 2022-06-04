# Planet Clash

## How to build
To build this project, run ``yarn build`` in the root directory of the project.

## How to test
To test this project, run ``yarn start`` in the root directory of the project.  
After this, open the url loged to the console.  
Note that this project supports live reload.  

## Can I play on mobile?
![cool meme](https://i.kym-cdn.com/entries/icons/original/000/028/596/dsmGaKWMeHXe9QuJtq_ys30PNfTGnMsRuHuo_MUzGCg.jpg)

You could technically play on mobile, but p5.js has several problems. Some of those being:
- The fullscreen button not working (p5.fullscreen() doesn't work)
- p5.js doesn't cancel events so moving your finger moves the page around

## Is this really object oriented?
Hell no. Javascript was never designed in an object oriented way. It wasn't even a thing until years after it's release.  
Typescript may make type safety a thing, but even that doesn't make it object oriented. Almost everything that can be done inside a file without any classes. This may mean you need to incorporate the class name into the function name, but who cares? Most of the things you will define in a potential class would be static anyway. Another big thing is inheritance. Javascript technically has class inheritance, but it's mostly to cast back to an original type. It lacks features like interfaces and abstract classes. You know, everything I like about languages like C#. Why am I writing this? I mean: take a look at my main class. I have a sketch class, but it isn't even required. I could do everything I wanted without using it. Hell, for the class to be used for anything I have to instantiate an object **OUTSIDE** of any class.  
Why am I writing this? I don't know. I guess I'm just annoyed with this project. The original game was writen in ~14 hours, most of which was in one day, over the course of a weekend. But because I had to reimagine things in a javascript way with a totally different backend it takes a lot of time. It all just feels counter productive.  
Conclusion: javascript is about as object oriented as C. Only, C embraces not being object oriented.