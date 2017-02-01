var curSystem = "elite";
var hiddenFlag = true;

var eliteThumbs = new Array(4);
eliteThumbs[0] = "images/eliteBundleThumb.png";
eliteThumbs[1] = "images/eliteConThumb.png";
eliteThumbs[2] = "images/eliteConBackThumb.png";
eliteThumbs[3] = "images/eliteControllerCaseThumb.png";

var eliteImgs = new Array(4);
eliteImgs[0] = "images/eliteBundle.png";
eliteImgs[1] = "images/eliteController.png";
eliteImgs[2] = "images/eliteController.png";
eliteImgs[3] = "images/eliteControllerCase.png";

var haloImgs = new Array(4);
haloImgs[0] = "images/halo5Console.png";
haloImgs[1] = "images/haloMCcon.png";
haloImgs[2] = "images/halo5LocCon.png";
haloImgs[3] = "images/halo5Headset.png";

var haloThumbs = new Array(4);
haloThumbs[0] = "images/halo5ConsoleThumb.png";
haloThumbs[1] = "images/haloMCcon.png";
haloThumbs[2] = "images/halo5LocConThumb.png";
haloThumbs[3] = "images/halo5HeadsetThumb.png";

var titanfallImgs = new Array(4);
titanfallImgs[0] = "images/titanConsole.png";
titanfallImgs[1] = "images/titanConBox.png";
titanfallImgs[2] = "images/titanCon.png";
titanfallImgs[3] = "images/titanHeadset.png";

var titanfallThumbs = new Array(4);
titanfallThumbs[0] = "images/titanConsoleThumb.png";
titanfallThumbs[1] = "images/titanConBoxThumb.png";
titanfallThumbs[2] = "images/titanConThumb.png";
titanfallThumbs[3] = "images/titanHeadsetThumb.png";

var forzaImgs = new Array(4);
forzaImgs[0] = "images/forzaBundle.png";
forzaImgs[1] = "images/forzaConsole.png";
forzaImgs[2] = "images/forzaController.png";
forzaImgs[3] = "images/forzaSpecialCons.png";

var forzaThumbs = new Array(4);
forzaThumbs[0] = "images/forzaBundleThumb.png";
forzaThumbs[1] = "images/forzaConsoleThumb.png";
forzaThumbs[2] = "images/forzaControllerThumb.png";
forzaThumbs[3] = "images/forzaSpecialConsThumb.png";

function fadeOut()
{
    $('#bigContainer').fadeOut(50);
}

function largeImg(val)
{
    switch(curSystem)
        {
            case 'elite':
            case 'eliteb':
                {
                    $('#bigImg').attr('src', eliteImgs[val]);
                    $('#bigContainer').fadeIn(300);
                    break;
                }
            case 'halo5':
            case 'halo5b':
                {
                    $('#bigImg').attr('src', haloImgs[val]);
                    $('#bigContainer').fadeIn(300);
                    break;
                }
            case 'titanfall':
            case 'titanfallb':    
                {
                    $('#bigImg').attr('src', titanfallImgs[val]);
                    $('#bigContainer').fadeIn(300);
                    break;
                }
            case 'forza6':
            case 'forza6b':
                {
                    $('#bigImg').attr('src', forzaImgs[val]);
                    $('#bigContainer').fadeIn(300);                    
                    break;
                }    
        }
}

function closeImg()
{
        $('#bigContainer').fadeOut(300);
}

function change(choice)
{
    //check for current system
    var selSystem = choice;
    
    if(selSystem == curSystem)
        {
            //do nothing
        }
    else
    {
        hideSections(); //fades all elements and slides slogan bar
/*        if(hiddenFlag == true)
            {
               $('#side1Img').css('visibility','visible');
               $('#side2Img').css('visibility','visible');
               $('#side3Img').css('visibility','visible');
               hiddenFlag == false;
            }*/
        curSystem = selSystem;
        
        switch(choice)
            {
                case 'elite':
                case 'eliteb':
                    {
                        //change background
                        $('#container').fadeOut(500, function()
                        {
                            $('#container').css({
                                                'background':'url(images/eliteBackground.jpg)',
                                                'background-size': 'cover'
                                                });   
                            
                            $('#container').fadeIn(500);
                            //change images/video sources
                            for(var i = 0; i < 5; i++)
                            {
                               $('#img' + i).attr('src', eliteThumbs[i]);
                            }
                            $('#sloganImg').attr('src' ,'images/xboxoneSlogan.png');
                            $('#video').attr('src' ,'https://www.youtube.com/embed/EM88V2UoDUY');
                            $('#side1Img').css('visibility','hidden');
                            $('#side2Img').css('visibility','hidden');
                            $('#side3Img').css('visibility','hidden');
                            //fade back in slide in logo
                            showSections();
                        });
                        break;
                    }
                case 'halo5':
                case 'halo5b':
                    {
                        //fade out
                        $('#container').fadeOut(500, function()
                        {
                            $('#container').css({'background': 'url(images/haloback.jpeg)', 'background-size': 'cover'});
                            $('#container').fadeIn(500);
                            //change images/video sources
                            for(var i = 0; i < 5; i++)
                            {
                                $('#img' + i).attr('src', haloThumbs[i]);
                            }
                            $('#sloganImg').attr('src' ,'images/haloSlogan.png');
                            $('#video').attr('src' ,'https://www.youtube.com/embed/-GutJxKdEvg');
                            //move lock and chife off to side
                            $('#side1').css('marginLeft', -1000);
                            $('#side2').css('marginRight', -1000);
                            $('#side1Img').css('visibility','visible');
                            $('#side3Img').css('visibility','visible');
                            $('#side2Img').css('visibility','visible');
                            $('#side1Img').attr('src', 'images/chief.png');
                            $('#side2Img').attr('src', 'images/locke.png');
                            $('#side3Img').attr('src', 'images/haloShip.png');
                            //fade back in slide in logo
                            showSections();
                            $('#side1').animate({marginLeft: 0}, 1000, 'swing');
                            $('#side2').animate({marginRight: 0}, 1000, 'swing');

                        });
                        //fade in everything slide in logo
                        //slide in like a vs. and reveal warthog
                        break;
                    }
                case 'titanfall':
                case 'titanfallb':    
                    {
                        //fade out
                        $('#container').fadeOut(500, function()
                        {
                            $('#container').css({'background': 'url(images/titanfallBack.jpg)', 'background-size': 'cover'});
                            $('#container').fadeIn(500);
                            //change images/video sources
                            for(var i = 0; i < 5; i++)
                            {
                                $('#img' + i).attr('src', titanfallThumbs[i]);
                            }
                            $('#sloganImg').attr('src' ,'images/TitanSlogan.png');
                            $('#video').attr('src' ,'https://www.youtube.com/embed/snrv8wTa88I');
                            $('#side1').css('marginTop', -800);
                            $('#side2').css('marginTop', -800);
                            $('#side1Img').css('visibility','visible');
                            $('#side3Img').css('visibility','visible');
                            $('#side2Img').css('visibility','visible');
                            $('#side1Img').attr('src', 'images/strider.png');
                            $('#side2Img').attr('src', 'images/Atlas.png');
                            $('#side3Img').attr('src', 'images/titanship2.png');
                            showSections();
                            $('#side1').animate({marginTop: 0}, 400, 'swing');
                            $('#side2').animate({marginTop: 0}, 400, 'swing');
                        });
                        //move lock and chife off to side
                        //fade in everything slide in logo
                        //slide in like a vs. and reveal warthog
                        break;
                       
                    }
                case 'forza6':
                case 'forza6b':
                    {
                        //fade out
                        $('#container').fadeOut(500, function()
                        {
                            $('#container').css({'background': 'url(images/forzaback.jpg)', 'background-size': 'cover'});
                            $('#container').fadeIn(500);
                            //change images/video sources
                            for(var i = 0; i < 5; i++)
                            {
                                $('#img' + i).attr('src', forzaThumbs[i]);
                            }
                            $('#sloganImg').attr('src' ,'images/forzaSlogan2.png');
                            $('#video').attr('src' ,'https://www.youtube.com/embed/Fm-daIf4_5k');
                            $('#side1').css('marginLeft', 500);
                            $('#side1').css('marginTop', -200);
                            $('#side1Img').css('visibility','visible');
                            $('#side3Img').css('visibility','visible');
                            $('#side2Img').css('visibility','visible');
                            $('#side1Img').attr('src', 'images/race.png');
                            $('#side2Img').attr('src', 'images/driver.png');
                            $('#side3Img').attr('src', 'images/forzaLogo1.png');
                            showSections();
                            $('#side1').animate({marginTop: 0, marginLeft: 0, }, 600, 'swing');

                            //fade back in slide in logo
                            
                        });
                        //move lock and chife off to side
                        //fade in everything slide in logo
                        //slide in like a vs. and reveal warthog
                        break;
                    }
            }
    }
}

    
function hideSections()
{
        $('#xbox').fadeOut(500);
        $('#thumb').fadeOut(500);
        $('#side1').fadeOut(500);
        $('#side2').fadeOut(500);
        $('#side3').fadeOut(500);
        $('#slogan').animate({ marginLeft: -2000 }, 300, 'swing');
}

function showSections()
{
        $('#xbox').fadeIn(500);
        $('#thumb').fadeIn(500);
        $('#side1').fadeIn(500);
        $('#side2').fadeIn(500);
        $('#side3').fadeIn(500);
        $('#slogan').animate({ marginLeft: 100 }, 500, 'swing');
}