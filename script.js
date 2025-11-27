   
        
    const kursSelect = document.querySelector(".Kurs");
    const hargavalas = document.getElementById("hargavalas");
    let Payment = document.getElementById("bayar");
    const convert = document.getElementById("convert");
    const kembalian=document.getElementById("change");
    const kursusd = document.getElementById("kursusd");
    const tablekurs= document.getElementById("kurs");
    const matauang = document.getElementById("currency"); 
    const kurspilih = document.getElementById("kurspilih"); 
    const buttonedit = document.getElementById("edit");    
     const bulat =document.getElementById("round");
    
        buttonedit.addEventListener("click", event => {
           if (tablekurs.style.visibility === "hidden"){
             tablekurs.style.visibility ="visible";
             buttonedit.textContent ="Hide Kurs";
           }
           else {
             tablekurs.style.visibility ="hidden";
             buttonedit.textContent ="Edit Kurs";
           }
        });

   
          const harga = document.getElementById("harga");
          const passenger =document.getElementById("orang");

          

               function formatRp(angka) {
                  const formatting = new Intl.NumberFormat("id-ID", {
                  style : "currency",
                  currency : "IDR",
                  maximumFractionDigits : 0,
              }
              ).format(angka);
              return formatting;
              }

            


    kursSelect.addEventListener("change", function() {
           if (kursSelect.value == "usd") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kursusd.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
      const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "$ " + Math.round(passenger.value * 513500 / kursusd.value);
        convert.value = formatkonversi;
        matauang.value = "US DOLLAR";
        kurspilih.value = kursusd.value;
        bulat.value= pembulatan;
        
        
      if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }
      }

      else if (kursSelect.value == "sgd") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kurssgd.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
            const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
      const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "S$ " + Math.round(passenger.value * 513500 / kurssgd.value);
        convert.value = formatkonversi;
        matauang.value = "SINGAPORE DOLLAR";
        kurspilih.value = kurssgd.value;
        bulat.value= pembulatan;
       
        
        
      if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }
       else if (kursSelect.value == "hkd") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kurshkd.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
            const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
 const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "HK$ " + Math.round(passenger.value * 513500 / kurshkd.value);
        convert.value = formatkonversi;
        matauang.value = "HONGKONG DOLLAR";
        kurspilih.value = kurshkd.value;
        bulat.value= pembulatan;
        
        
      if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }
       else if (kursSelect.value == "eur") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kurseur.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
            const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
      const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "€ " + Math.round(passenger.value * 513500 / kurseur.value);
        convert.value = formatkonversi;
        matauang.value = "EURO";
        kurspilih.value = kurseur.value;
        bulat.value= pembulatan;
        
        
      if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }

       else if (kursSelect.value == "jpy") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kursjpy.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
      const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "¥ " + Math.round(passenger.value * 513500 / kursjpy.value);
        convert.value = formatkonversi;
        matauang.value = "JAPANESE YEN";
        kurspilih.value = kursjpy.value;
        bulat.value= pembulatan;
        
        
      if(bulat.value > 499){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }

       else if (kursSelect.value == "gbp") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kursgbp.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
      const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "£ " + Math.round(passenger.value * 513500 / kursgbp.value);
        convert.value = formatkonversi;
        matauang.value = "POUNDSTERLING";
        kurspilih.value = kursgbp.value;
        bulat.value= pembulatan;
        
        
     if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }

      else if (kursSelect.value == "sar") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kurssar.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
 const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "﷼ " + Math.round(passenger.value * 513500 / kurssar.value);
        convert.value = formatkonversi;
        matauang.value = "SAUDI RIYAL";
        kurspilih.value = kurssar.value;
        bulat.value= pembulatan;
        
        
      if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }

      else if (kursSelect.value == "aud") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kursaud.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
 const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "A$ " + Math.round(passenger.value * 513500 / kursaud.value);
        convert.value = formatkonversi;
        matauang.value = "AUSTRALIAN DOLLAR";
        kurspilih.value = kursaud.value;
        bulat.value= pembulatan;
        
        
      if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }

      else if (kursSelect.value == "thb") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kursthb.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
         const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "฿ " + Math.round(passenger.value * 513500 / kursthb.value);
        convert.value = formatkonversi;
        matauang.value = "THAILAND BATH";
        kurspilih.value = kursthb.value;
        bulat.value= pembulatan;
        
        
      if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }

    
      else if (kursSelect.value == "myr") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kursmyr.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
      const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "RM " + Math.round(passenger.value * 513500 / kursmyr.value);
        convert.value = formatkonversi;
        matauang.value = "MALAYSIAN RINGGIT";
        kurspilih.value = kursmyr.value;
        bulat.value= pembulatan;
        
        
     if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }

       else if (kursSelect.value == "cny") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kurscny.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
      const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "CN¥ " + Math.round(passenger.value * 513500 / kurscny.value);
        convert.value = formatkonversi;
        matauang.value = "CHINESE YUAN";
        kurspilih.value = kurscny.value;
        bulat.value= pembulatan;
        
        
     if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }
       else if (kursSelect.value == "idr") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kursidr.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(Payment.value - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
       const changeround = formatRp(konversinumber -harganumber - pembulatan);
  
        
        harga.value = formatharga;
        hargavalas.value = "-";
        matauang.value = "INDONESIA RUPIAH";
        convert.value = " ";
        kurspilih.value = kursidr.value;
        bulat.value= "-";
        kembalian.value= formatkembali;
        

      }
      });  
              
    passenger.addEventListener("keyup", function() {
           if (kursSelect.value == "usd") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kursusd.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
      const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "$ " + Math.round(passenger.value * 513500 / kursusd.value);
        convert.value = formatkonversi;
        matauang.value = "US DOLLAR";
        kurspilih.value = kursusd.value;
        bulat.value= pembulatan;
        
        
      if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }
      }

      else if (kursSelect.value == "sgd") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kurssgd.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
            const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
      const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "S$ " + Math.round(passenger.value * 513500 / kurssgd.value);
        convert.value = formatkonversi;
        matauang.value = "SINGAPORE DOLLAR";
        bulat.value= pembulatan;
        
        
      if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }
       else if (kursSelect.value == "hkd") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kurshkd.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
            const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
 const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "HK$ " + Math.round(passenger.value * 513500 / kurshkd.value);
        convert.value = formatkonversi;
        matauang.value = "HONGKONG DOLLAR";
        kurspilih.value = kurshkd.value;
        bulat.value= pembulatan;
        
        
      if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }
       else if (kursSelect.value == "eur") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kurseur.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
            const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
 const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "€ " + Math.round(passenger.value * 513500 / kurseur.value);
        convert.value = formatkonversi;
        matauang.value = "EURO";
        kurspilih.value = kurseur.value;
        bulat.value= pembulatan;
        
        
      if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }

       else if (kursSelect.value == "jpy") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kursjpy.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
 const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "¥ " + Math.round(passenger.value * 513500 / kursjpy.value);
        convert.value = formatkonversi;
        matauang.value = "JAPANESE YEN";
        kurspilih.value = kursjpy.value;
        bulat.value= pembulatan;
        
        
      if(bulat.value > 499){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }

       else if (kursSelect.value == "gbp") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kursgbp.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
 const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "£ " + Math.round(passenger.value * 513500 / kursgbp.value);
        convert.value = formatkonversi;
        matauang.value = "POUNDSTERLING";
        kurspilih.value = kursgbp.value;
        bulat.value= pembulatan;
        
        
     if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }

      else if (kursSelect.value == "sar") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kurssar.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
 const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "﷼ " + Math.round(passenger.value * 513500 / kurssar.value);
        convert.value = formatkonversi;
        matauang.value = "SAUDI RIYAL";
        kurspilih.value = kurssar.value;
        bulat.value= pembulatan;
        
        
      if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }

      else if (kursSelect.value == "aud") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kursaud.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
 const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "A$ " + Math.round(passenger.value * 513500 / kursaud.value);
        convert.value = formatkonversi;
        matauang.value = "AUSTRALIAN DOLLAR";
        kurspilih.value = kursaud.value;
        bulat.value= pembulatan;
        
        
      if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }

      else if (kursSelect.value == "thb") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kursthb.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
         const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "฿ " + Math.round(passenger.value * 513500 / kursthb.value);
        convert.value = formatkonversi;
        matauang.value = "THAILAND BATH";
        kurspilih.value = kursthb.value;
        bulat.value= pembulatan;
        
        
      if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }

    
      else if (kursSelect.value == "myr") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kursmyr.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
      const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "RM " + Math.round(passenger.value * 513500 / kursmyr.value);
        convert.value = formatkonversi;
        matauang.value = "MALAYSIAN RINGGIT";
        kurspilih.value = kursmyr.value;
        bulat.value= pembulatan;
        
        
     if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }

       else if (kursSelect.value == "cny") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kurscny.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
      const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "CN¥ " + Math.round(passenger.value * 513500 / kurscny.value);
        convert.value = formatkonversi;
        matauang.value = "CHINESE YUAN";
        kurspilih.value = kurscny.value;
        bulat.value= pembulatan;
        
        
     if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }
       else if (kursSelect.value == "idr") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kursidr.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(Payment.value - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
       const changeround = formatRp(konversinumber -harganumber - pembulatan);
  
        
        harga.value = formatharga;
        hargavalas.value = "-";
        matauang.value = "INDONESIA RUPIAH";
        convert.value = " ";
        kurspilih.value = kursidr.value;
        bulat.value= "-";
        kembalian.value= formatkembali;

      }
      });

    Payment.addEventListener("keyup", function() {
           if (kursSelect.value == "usd") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kursusd.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
      const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "$ " + Math.round(passenger.value * 513500 / kursusd.value);
        convert.value = formatkonversi;
        matauang.value = "US DOLLAR";
        kurspilih.value = kursusd.value;
        bulat.value= pembulatan;
        
        
      if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }
      }

      else if (kursSelect.value == "sgd") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kurssgd.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
            const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
      const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "S$ " + Math.round(passenger.value * 513500 / kurssgd.value);
        convert.value = formatkonversi;
        matauang.value = "SINGAPORE DOLLAR";
        bulat.value= pembulatan;
        
        
      if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }
       else if (kursSelect.value == "hkd") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kurshkd.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
            const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
 const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "HK$ " + Math.round(passenger.value * 513500 / kurshkd.value);
        convert.value = formatkonversi;
        matauang.value = "HONGKONG DOLLAR";
        kurspilih.value = kurshkd.value;
        bulat.value= pembulatan;
        
        
      if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }
       else if (kursSelect.value == "eur") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kurseur.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
            const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
 const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "€ " + Math.round(passenger.value * 513500 / kurseur.value);
        convert.value = formatkonversi;
        matauang.value = "EURO";
        kurspilih.value = kurseur.value;
        bulat.value= pembulatan;
        
        
      if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }

       else if (kursSelect.value == "jpy") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kursjpy.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
 const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "¥ " + Math.round(passenger.value * 513500 / kursjpy.value);
        convert.value = formatkonversi;
        matauang.value = "JAPANESE YEN";
        kurspilih.value = kursjpy.value;
        bulat.value= pembulatan;
        
        
      if(bulat.value > 499){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }

       else if (kursSelect.value == "gbp") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kursgbp.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
 const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "£ " + Math.round(passenger.value * 513500 / kursgbp.value);
        convert.value = formatkonversi;
        matauang.value = "POUNDSTERLING";
        kurspilih.value = kursgbp.value;
        bulat.value= pembulatan;
        
        
     if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }

      else if (kursSelect.value == "sar") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kurssar.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
 const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "﷼ " + Math.round(passenger.value * 513500 / kurssar.value);
        convert.value = formatkonversi;
        matauang.value = "SAUDI RIYAL";
        kurspilih.value = kurssar.value;
        bulat.value= pembulatan;
        
        
      if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }

      else if (kursSelect.value == "aud") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kursaud.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
 const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "A$ " + Math.round(passenger.value * 513500 / kursaud.value);
        convert.value = formatkonversi;
        matauang.value = "AUSTRALIAN DOLLAR";
        kurspilih.value = kursaud.value;
        bulat.value= pembulatan;
        
        
      if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }

      else if (kursSelect.value == "thb") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kursthb.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
         const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "฿ " + Math.round(passenger.value * 513500 / kursthb.value);
        convert.value = formatkonversi;
        matauang.value = "THAILAND BATH";
        kurspilih.value = kursthb.value;
        bulat.value= pembulatan;
        
        
      if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }

    
      else if (kursSelect.value == "myr") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kursmyr.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
      const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "RM " + Math.round(passenger.value * 513500 / kursmyr.value);
        convert.value = formatkonversi;
        matauang.value = "MALAYSIAN RINGGIT";
        kurspilih.value = kursmyr.value;
        bulat.value= pembulatan;
        
        
     if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }

       else if (kursSelect.value == "cny") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kurscny.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(konversinumber - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
      const changeround = formatRp(konversinumber -harganumber - pembulatan);

        harga.value = formatharga;
        hargavalas.value = "CN¥ " + Math.round(passenger.value * 513500 / kurscny.value);
        convert.value = formatkonversi;
        matauang.value = "CHINESE YUAN";
        kurspilih.value = kurscny.value;
        bulat.value= pembulatan;
        
        
     if(bulat.value > 500){
           kembalian.value= changefix;
           bulat.value= pembulatan-500;
       } else {
        kembalian.value= changeround;
       };
      if(bulat.value < 0){
           kembalian.value= formatkembali;
           bulat.value= "";
       }

      }
       else if (kursSelect.value == "idr") {
      const formatharga = formatRp(passenger.value * 513500);
      const formatkonversi = formatRp(Payment.value * kursidr.value);
      const harganumber = formatharga.replace(/[^0-9]/g, '');
      const konversinumber = formatkonversi.replace(/[^0-9]/g, '');
      const formatkembali = formatRp(Payment.value - harganumber);
      const pembulatan = (konversinumber - harganumber) % 1000;
      const changefix = formatRp(konversinumber -harganumber - pembulatan + 500);
       const changeround = formatRp(konversinumber -harganumber - pembulatan);
  
        
        harga.value = formatharga;
        hargavalas.value = "-";
        matauang.value = "INDONESIA RUPIAH";
        convert.value = " ";
        kurspilih.value = kursidr.value;
        bulat.value= '-';
        kembalian.value= formatkembali;

      }
      });


  function printReceipt() {
  // Ambil data dari input
  const currency = document.getElementById("currency").value;
  const kurs = document.getElementById("kurspilih").value;
  const passenger = document.getElementById("orang").value;
  const price = document.getElementById("harga").value;
  const pay = document.getElementById("bayar").value;
  const convert = document.getElementById("convert").value;
  const change = document.getElementById("change").value;
  const hargavalas = document.getElementById("hargavalas").value;

  // Buat konten struk
  const receiptContent = `
  <div id="receipt" style="width:68mm; font-family: sans-serif; font-size:14px; padding:5px;">
    <div style="text-align:center;">
      <h3 style="margin:0;">VISA ON ARRIVAL</h3>
      <p style="margin:0;">Molina Lite</p>
      <hr>
    </div >
    <p style="text-align:center">Date: ${new Date().toLocaleString('us-ID')}</p>
    <p style="text-align:center"> Rp. 513.500/Person </p>
     <table style="width:100%; font-size:12px;">
      <tr>
        <td style="width:100px">Currency</td>
        <td>:</td>
        <td style="text-align:right;">${currency}</td>
      </tr>
      <tr>
        <td>Exchange Rate</td>
        <td>:</td>
        <td style="text-align:right;">${kurs}</td>
      </tr>
      <tr>
        <td>Passengers</td>
        <td>:</td>
        <td style="text-align:right;">${passenger} Person</td>
      </tr>
      </table>
    
  <br>
    <hr>
    <table style="width:100%; font-size:12px;">
      <tr>
        <td style="width:100px">Price</td>
        <td >:</td>
        <td style="text-align:right;">${price}</td>
      </tr>
      <tr>
        <td style="font-size:10px">${currency}</td>
        <td >:</td>
        <td style="text-align:right;">${hargavalas}</td>
      </tr>
      <tr>
        <td style="height : 14px" ></td>
        <td></td>
        <td ></td>
      </tr>
      
      <tr>
        <td>Payment</td>
        <td>:</td>
        <td style="text-align:right;">${pay}</td>
      </tr>
      <tr>
        <td>Converted</td>
        <td>:</td>
        <td style="text-align:right;">${convert}</td>
      </tr>
      <tr>
        <td>Change</td>
        <td>:</td>
        <td style="text-align:right;">${change}</td>
      </tr>
    </table>
    <hr>
    <div style="text-align:center;">
      <p>Thank you!</p>
      <p>Have a nice day</p>
    </div>
  </div>
  `;

  // Buka jendela baru untuk print
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html>
      <head>
        <title>Receipt</title>
        <style>
          @page {
            size: 58mm auto;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
            font-family: monospace;
          }
          #receipt {
            width: 58mm;
            padding: 5px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          td {
            padding: 2px 0;
          }
          hr {
            border: 0;
            border-top: 1px dashed #000;
          }
        </style>
      </head>
      <body onload="window.print(); window.close();">
        ${receiptContent}
      </body>
    </html>
  `);
  printWindow.document.close();
};

const lightIcon = document.querySelector(".light");
const darkIcon  = document.querySelector(".dark");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// tampilkan icon sesuai mode
function themeCheck(){
    if(userTheme === "dark" || (!userTheme && systemTheme)){
        document.documentElement.classList.add("dark");
        lightIcon.classList.remove("hidden");
        darkIcon.classList.add("hidden");
    } else {
        document.documentElement.classList.remove("dark");
        darkIcon.classList.remove("hidden");
        lightIcon.classList.add("hidden");
    }
}

function themeSwitch(){
    document.documentElement.classList.toggle("dark");

    if(document.documentElement.classList.contains("dark")){
        localStorage.setItem("theme", "dark");
        lightIcon.classList.remove("hidden");
        darkIcon.classList.add("hidden");
    } else {
        localStorage.setItem("theme", "light");
        darkIcon.classList.remove("hidden");
        lightIcon.classList.add("hidden");
    }
}

lightIcon.onclick = themeSwitch;
darkIcon.onclick  = themeSwitch;

themeCheck();
