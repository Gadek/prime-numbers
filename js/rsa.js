

// Funkcja obliczająca NWD dla dwóch liczb
//----------------------------------------

function nwd(a, b)
{
  

  while(a != b)
  {
    if(a<b) b -= a;
	else a -= b
  };
  console.log(a);
  return a;
}

// Funkcja obliczania odwrotności modulo n
//----------------------------------------

function odwr_mod(a, n)
{
  var a0,n0,p0,p1,q,r,t;

  p0 = 0; p1 = 1; a0 = a; n0 = n;
  q  = Math.floor(n0 / a0);
  r  = n0 % a0;
  while(r > 0)
  {
    t = p0 - q * p1;
    if(t >= 0)
      t = t % n;
    else
      t = n - ((-t) % n);
    p0 = p1; p1 = t;
    n0 = a0; a0 = r;
    q  = Math.floor(n0 / a0);
    r  = n0 % a0;
  };
  return p1;
}

function genKeys()
{
  //var tp = new Array(11,13,17,19,23,29,31,37,41,43);
  var tp = new Array(7841, 7853, 7867, 7873, 7877, 7879, 7883, 7901, 7907, 7919);
  var p,q,phi,n,e,d;

// generowanie dwóch różnych liczb pierwszych

  do
  {
    p = tp[Math.floor(Math.random() * 10)];
    q = tp[Math.floor(Math.random() * 10)];
  }
  while (p == q);

  phi = (p - 1) * (q - 1);
  n   = p * q;

// wyznaczanie liczb e i d

  for(e = 3; nwd(e,phi) != 1; e += 2);
  d = odwr_mod(e,phi);

// wypisywanie kluczy

  $("#gkey_e").text(e);
  $("#gkey_d").text(d);
  $("#gkey_n1").text(n);
  $("#gkey_n2").text(n);
}



// Funkcja oblicza modulo potęgę podanej liczby
//---------------------------------------------

function pot_mod(a, w, n)
{
  var pot,wyn,q;

// wykładnik w rozbieramy na sumę potęg 2
// przy pomocy algorytmu Hornera. Dla reszt
// niezerowych tworzymy iloczyn potęg a modulo n.

  pot = a; wyn = 1; 
  for(q = w; q > 0; q = Math.floor(q / 2))
  {
    if(q % 2) wyn = (wyn * pot) % n;
    pot = (pot * pot) % n; // kolejna potęga
  };
  return wyn;
}

function codeRSA()
{
  var e,n,t,s;

  e = parseInt(document.rsa.ed.value);
  n = parseInt(document.rsa.n.value);
  t = parseInt(document.rsa.m.value);
  if(isNaN(e) || isNaN(n) || isNaN(t))
    s = "Błąd danych";
  else
    s = pot_mod(t,e,n);
  $("#rsa_out").text(s);
}


function clearKeys()
{
  $("#gkey_e").text("...");
  $("#gkey_d").text("...");
  $("#gkey_n1").text("...");
  $("#gkey_n2").text("...");
}

