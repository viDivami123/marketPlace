import { Component } from '@angular/core';

@Component({
  selector: 'app-top-ordered-items',
  templateUrl: './top-ordered-items.component.html',
  styleUrls: ['./top-ordered-items.component.css']
})
export class TopOrderedItemsComponent {
public topRatedItems = [
  {
    "img":"https://s3-alpha-sig.figma.com/img/02ec/6f54/19cfe3c319582501ce844fc8cf0345b4?Expires=1685923200&Signature=IFuJvFf0Hln~YJYGR-7YTELlFER9w9QQ9uGKgMMwIofH1z5jIp-V1eJod9xCmXbDsLAiMBqEL1N1Ja4FWGE4sv2gww8KnpWMOG78XamkK0TAOuwzELvCwDMPbyXLIZsuK7s0rbP6-wjcPboXyn21btSd6bUq8RnOAC1R18I-IZNpnVWQIYGTSNOEo86ad8pE3YqOKeBY18VO8xSMygsFF1H-AZ-IEo-F647ztoOVWuiZu4rRC8Iv94PhOWL0saggoOx7mbyho2tdcUpuPZHxKeOjX~iKEt~BEMcsmep5OQR3VXHHCZ~qZKgfUPy48xp7IVGO524-h~9fg5JoShq4jw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "progress":"96",
    "value":"60 SKU",
    "name":"Chicken",
   
    },{
      "img":"https://s3-alpha-sig.figma.com/img/abf4/722d/3b95a45ef2782c57295065a7875a5d0c?Expires=1685923200&Signature=lrz412UvUajhVbOj3G7eEeN7wdy-JboSlR9mAVCP3D3z5CRbvKLhdj0Z1FgwhlljiQr412vr1DPNC2E2gv4WX0RZ25tCSn-fyyR5ewTt8ptmNA~~xspnqFA46SeDHRUaZ3nBMEWsXzFaMUJUKRweC3PFoQCK27wtwc2hX2Z-TVVTyS879McEfwcyh-i56kAE3UxvjV8Imtm9dGcLRmDFprf2We~ZKfUS64LHutwiJK1srM14A8g7zoq69X9omI9N9N0irwgQg8LGu7BzI-z6XcbafczREUnx8yZ5VcyHcovc9Eg0CPFtDCU~6OF42AIiqzIOpDO-VWvcnqWFaCGD-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "progress":"144",
      "value":"80 SKU",
      "name":"Butter",
    
    },{
      "img":"https://s3-alpha-sig.figma.com/img/3897/0bd4/8b976f2f34702225d63b54f427565d23?Expires=1685923200&Signature=lfe32pLswXd8VGN8xtvjIP3kYZj-XJF8Ro39-yj44t3bu5Os5rc3S0dwtptR5ibTDnSCQ7TCtT468RtAFUQTCnCPf8LSBgW8Y9QtYtLlZv94vIcVshQ3meLBoBCQ92c36hldb95lanC-qg4raZCAMGUHOCtiy4kEE2mgTlOI8SAQ9QWem02kwvECsNue0lvBuTrDW2pT-KssnQjLH2dxATJTHRL9ypF~vbHp~8geG1zL3OEqjaxA7OlS8X7OsHMU4Oxz3bKPyMyrkR~nDSKNrP8x6ejufAmj3DG9w11Vir9kwnVN5mbl9O0iA1NICS-NWjEIHTEWRb4T3FHxEHSC9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "progress":"150",
      "value":"70 SKU",
      "name":"Milk",
     
    },
    {
      "img":"https://s3-alpha-sig.figma.com/img/d3ff/f0bf/973626ec951d7f24dbd3da6a29b3ee0b?Expires=1685923200&Signature=DM0i~YVMrgTj9EkSXgUuxO7m88rFgoTY~-nb9qe9bva1jihvt4IXPllJR21z3mv7q7oj3-8ZnPrEFEEo7Z3UB0sEE75yZOQ4~Qemc1R3vIRaXKjdOrrUWwXBelZLJmV7pUBcH-Y8-gsMo3MrL-FHgrJgX7qh67y0C9S3eELpiQ9v8jJ9MOxxnAZiA8haNuAC~xLDs-vhu1oCTknLK90UPNklr0xsyhcROC-Km-aHydPvLsJYlmBOU~PmomU7MxEwuJGxtQ~VH8kGE2TBj1n70ntXwKmXr5RudHdMmD0kwqVKLaODl7BogLcAas2fhx~Uxd-CByLswMMND3lyiYNQTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "progress":"168",
      "value":"30 SKU",
      "name":"Yogurt",
      
      
    },{
      "img":"https://s3-alpha-sig.figma.com/img/9c63/9761/a411e8c7998799c432820f9dc454ddaf?Expires=1685923200&Signature=DLoY4Jo3o5P03M-Lxl495~VftfxNaACabzt1FxS0lRSYZ1bIjGlT0GPDBoTSugSquKIZPez23DMx9bQ5ajZraqT9HPXpr7Bo9ginyZhyxqr7nkw7afssFjlJ6tvy407sMBLxpLkewWLTI-5lYE6OGJwlEEv2ZiD80ID2sbpdUqjspz5evoi38-kXEmo5OGnz8gwjiMTvyxSBMOWklE9GpOyvxx3BLykyash3t5ypZ6WhFXddE7NKFz3LFSoS-QhnFl210Jqeu5LQneJ913hBMIG9OZqBwkaZPappbFVvWuWpQj6mVOn~cHPYugpSTCFpkNpqspwZCI3nT1SlZwxHMg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "progress":"216",
      "value":"30 SKU",
      "name":"Lettuce",
     
    }
]

}
