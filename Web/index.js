gsap.registerPlugin(SplitText) 
gsap.registerPlugin(GSDevTools);
gsap.registerPlugin(ScrollTrigger);

var split1 = SplitText.create('.teks-1', {type : 'words, chars'});
var split2 = SplitText.create('.teks-2' ,{type : 'words, chars'});
var split3 = SplitText.create('.teks-3', {type : 'lines'});
var split4 = SplitText.create('.teks-7', {type :'words,lines,chars'});

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

ScrollTrigger.create({
    trigger : '.box-8',
    onEnter : () => gsap.to('.badan' , {backgroundColor : "#a1e69e" , duration : 1 , ease : 'power1.out'}),
    onLeave : () => gsap.to('.badan' , {backgroundColor : '#c79ee6', duration : 1, ease : 'power1.out'}),
    onEnterBack : () => gsap.to ('.badan' , {backgroundColor : "#a1e69e" , duration : 1 , ease : 'power1.out'}),
    onLeaveBack : () => gsap.to('.badan' , {backgroundColor : 'white', duration : 1, ease : 'power1.out'}),
});

ScrollTrigger.create({
    trigger : '.box-7',
    end : 'center',
    onEnter : () => gsap.to('.badan' , {backgroundColor : "#c79ee6" , duration : 1 , ease : 'power1.out'}),
    onLeave : () => gsap.to('.badan' , {backgroundColor : 'white', duration : 1, ease : 'power1.out'}),
    onEnterBack : () => gsap.to ('.badan' , {backgroundColor : "#c79ee6" , duration : 1 , ease : 'power1.out'}),
    onLeaveBack : () => gsap.to('.badan' , {backgroundColor : '#a1e69e', duration : 1, ease : 'power1.out'}),
    markers : false
});

var tl2 = gsap.timeline({
    scrollTrigger : {
        trigger : '.box-8',
        ease : 'power1.InOut'
    }
});

tl2.from('.gambar-1' ,{
    duration : 1,
    opacity : 0,
    y: -100,
    ease : 'power4.out'
}) 
.fromTo('.gambar-1' , {
        y : 0,
        ease : 'none'
    }, 
    
    {
        y : -50,
        duration : 1.5,
        repeat : -1,
        yoyo : true,
        ease : 'none'
    })

.from('.gambar-2' ,{
    duration : 1,
    opacity : 0,
    y: -100,
    ease : 'power4.out'
}, 0.25) 
.fromTo('.gambar-2' , {
        y : 0,
        ease : 'none'
    }, 
    
    {
        y : -50,
        duration : 1.5,
        repeat : -1,
        yoyo : true,
        ease : 'none'
    })

.from('.gambar-3' ,{
    duration : 1,
    opacity : 0,
    y: -100,
    ease : 'power4.out'
}, 0.50) 
.fromTo('.gambar-3' , {
        y : 0,
        ease : 'none'
    }, 
    
    {
        y : -50,
        duration : 1.5,
        repeat : -1,
        yoyo : true,
        ease : 'none'
    })

.from('.gambar-4' ,{
    duration : 1,
    opacity : 0,
    y: -100,
    ease : 'power4.out'
}, 0.75) 
.fromTo('.gambar-4' , {
        y : 0,
        ease : 'none'
    }, 
    
    {
        y : -50,
        duration : 1.5,
        repeat : -1,
        yoyo : true,
        ease : 'none'
    })
    
.from('.gambar-5' ,{
    duration : 1,
    opacity : 0,
    y: -100,
    ease : 'power4.out'
}, 1) 
.fromTo('.gambar-5' , {
        y : 0,
        ease : 'none'
    }, 
    
    {
        y : -50,
        duration : 1.5,
        repeat : -1,
        yoyo : true,
        ease : 'none'
    })

.from('.gambar-6' ,{
    duration : 1,
    opacity : 0,
    y: -100,
    ease : 'power4.out'
}, 1.25) 
.fromTo('.gambar-6' , {
        y : 0,
        ease : 'none'
    }, 
    
    {
        y : -50,
        duration : 1.5,
        repeat : -1,
        yoyo : true,
        ease : 'none'
    })


var tl3 = gsap.timeline({
    scrollTrigger : {
        trigger : '.box-7',
        ease : 'power1.InOut'
    }
});

tl3.from('.gambar-7' ,{
    duration : 1,
    opacity : 0,
    y: -100,
    ease : 'power4.out'
}) 
.fromTo('.gambar-7' , {
        y : 0,
        ease : 'none'
    }, 
    
    {
        y : -50,
        duration : 1.5,
        repeat : -1,
        yoyo : true,
        ease : 'none'
    })

.from('.gambar-8' ,{
    duration : 1,
    opacity : 0,
    y: -100,
    ease : 'power4.out'
}, 0.25) 
.fromTo('.gambar-8' , {
        y : 0,
        ease : 'none'
    }, 
    
    {
        y : -50,
        duration : 1.5,
        repeat : -1,
        yoyo : true,
        ease : 'none'
    })

.from('.gambar-9' ,{
    duration : 1,
    opacity : 0,
    y: -100,
    ease : 'power4.out'
}, 0.50) 
.fromTo('.gambar-9' , {
        y : 0,
        ease : 'none'
    }, 
    
    {
        y : -50,
        duration : 1.5,
        repeat : -1,
        yoyo : true,
        ease : 'none'
    })

.from('.gambar-10' ,{
    duration : 1,
    opacity : 0,
    y: -100,
    ease : 'power4.out'
}, 0.75) 
.fromTo('.gambar-10' , {
        y : 0,
        ease : 'none'
    }, 
    
    {
        y : -50,
        duration : 1.5,
        repeat : -1,
        yoyo : true,
        ease : 'none'
    })
    
.from('.gambar-11' ,{
    duration : 1,
    opacity : 0,
    y: -100,
    ease : 'power4.out'
}, 1) 
.fromTo('.gambar-11' , {
        y : 0,
        ease : 'none'
    }, 
    
    {
        y : -50,
        duration : 1.5,
        repeat : -1,
        yoyo : true,
        ease : 'none'
    })

.from('.gambar-12' ,{
    duration : 1,
    opacity : 0,
    y: -100,
    ease : 'power4.out'
}, 1.25) 
.fromTo('.gambar-12' , {
        y : 0,
        ease : 'none'
    }, 
    
    {
        y : -50,
        duration : 1.5,
        repeat : -1,
        yoyo : true,
        ease : 'none'
    })

gsap.from('.teks-6', {
    scrollTrigger : {
        trigger : '.teks-6',
        start : 'top center',
        markers : true
    },
    duration : 1,
    y : -150,
    opacity : 0,
    ease : 'power4.out',
})

gsap.from(split4.chars, {
    scrollTrigger : {
        trigger : '.teks-7',
    },
    duration : 1,
    stagger : 0.03,
    opacity : 0,
    y : 200,
    ease : 'power4.out'
})