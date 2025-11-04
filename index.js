gsap.registerPlugin(SplitText) 
gsap.registerPlugin(GSDevTools);
gsap.registerPlugin(ScrollTrigger);

var split1 = SplitText.create('.teks-1', {type : 'words, chars'});
var split2 = SplitText.create('.teks-2' ,{type : 'words, chars'});
var split3 = SplitText.create('.teks-3', {type : 'lines'});

var tl1 = gsap.timeline();

tl1.from('.kotak-1', {
    duration : 1.5,
    opacity : 0,
    y : 100,
    ease : 'power4.out'
})
    .from(split1.chars, {
        duration: 1.25,
        opacity : 0,
        x : 200 , 
        stagger : 0.05,
        ease: 'power4.out'
}, '-=0.75')

    .from(split2.chars, {
        duration: 1.25,
        opacity : 0,
        x : 200 , 
        stagger : 0.05,
        ease: 'power4.out'
}, '-=0.75')

    .from(split3.lines , {
        duration : 1,
        opacity : 0,
        y : 200,
        ease : 'power4.out'
    }, '-=0.25');

//GSDevTools.create({animation : tl1});

gsap.from('.teks-4' ,{
    scrollTrigger : '.teks-4',
    duration : 1.25,
    opacity : 0,
    y : 200,
    ease : 'power4.out'
});

gsap.from('.box-5' , {
    scrollTrigger : '.box-5',
    duration : 1.75,
    opacity : 0,
    x : -300,
    ease : 'power4.out'
});

gsap.from('.box-6' , {
    scrollTrigger : '.box-6',
    duration : 1.75,
    opacity : 0,
    x : 300,
    ease : 'power4.out'
});

gsap.to('.badan',{
    scrollTrigger : {
        trigger : '.box-8',
        toggleActions : 'play play play play',
        markers : true
    },
    duration : 1,
    backgroundColor : "#c6e0a8",
    ease : 'power1.out'
});

gsap.to('.badan',{
    scrollTrigger : {
        trigger : '.box-7',
        toggleActions : 'play reverse none none',
        markers : true
    },
    duration : 1,
    backgroundColor : "#caa8e0",
    ease : 'power1.out'
}); 

