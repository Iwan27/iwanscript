             (function() {
                        var bloggerjs = document.createElement(&quot;script&quot;);
                        bloggerjs.type = &quot;text/javascript&quot;;
                        bloggerjs.async = true;
                        bloggerjs.src = &quot;//&quot;+disqus_shortname+&quot;.disqus.com/blogger_item.js&quot;;
                        (document.getElementsByTagName(&quot;head&quot;)[0] || document.getElementsByTagName(&quot;body&quot;)[0]).appendChild(bloggerjs);
                    })();
                (function() {
                    var bloggerjs = document.createElement(&quot;script&quot;);
                    bloggerjs.type = &quot;text/javascript&quot;;
                    bloggerjs.async = true;
                    bloggerjs.src = &quot;//&quot;+disqus_shortname+&quot;.disqus.com/blogger_index.js&quot;;
                    (document.getElementsByTagName(&quot;head&quot;)[0] || document.getElementsByTagName(&quot;body&quot;)[0]).appendChild(bloggerjs);
                })();

$("a").filter(function() {
return this.hostname && this.hostname !== location.hostname
}).attr('rel', 'nofollow').attr('target', '_blank');

!function(a){var b=a("a.blog-pager-newer-link"),c=a("a.blog-pager-older-link");a.get(b.attr("href"),function(c){b.html(a(c).find(".post h1.post-title").text())},"html"),a.get(c.attr("href"),function(b){c.html(a(b).find(".post h1.post-title").text())},"html")}(jQuery);

!function(e,n,t){var o,c=e.getElementsByTagName(n)[0];e.getElementById(t)||(o=e.createElement(n),o.id=t,o.src="https://connect.facebook.net/id_ID/sdk.js#xfbml=1&version=v2.8&appId=1424711297783962",c.parentNode.insertBefore(o,c))}(document,"script","facebook-jssdk");
