let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
/*
h : matches (h)
t : matches (t)
t : matches (t)
p : matches (p)
s : matches (s)
? : one or zero quantifier 
: : matches (:)
\ : escaping character
/ : matches (/)
\ : escaping character
/ : matches (/)
(?:) : non capturing group
      [] : range or set to match any character or digit inside it
          - : matches (-)
          \w : matches alphanumeric and underscore   
      + : one or more quantifier 
      \ : escaping character  
      . : matches (.)
? : one or zero quantifier 
() : capturing group
    [] : range or set to match any character or digit inside it
        - : matches (-)
        \w : match alphanumeric and underscore   
    + : one or more quantifier 
\ : escaping character  
. : matches (.)  
\w : matches alphanumeric and underscore    
+ :  one or more quantifier 
(?:) : non capturing group
      \ : escaping character
      . : matches (.) 
      \w : matches alphanumeric and underscore    
      + : one or more quantifier
? : one or zero quantifier 
\ : escaping character
/ : matches (/)   
? : one or zero quantifier 
. : matches any character expect newline and other lineterminator 
* : zero or more
i : unsensitive alphabetic flag
*/
