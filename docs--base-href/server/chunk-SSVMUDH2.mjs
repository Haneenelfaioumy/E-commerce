import './polyfills.server.mjs';
import{h as S}from"./chunk-7BCXA4SU.mjs";import{a as v}from"./chunk-XFVGNSLE.mjs";import{Bb as l,Cb as g,Dc as f,Ib as b,Na as c,P as m,V as r,Z as u,kb as d,lb as p,mb as n,nb as a}from"./chunk-PSESFIIL.mjs";var y=(()=>{let t=class t{constructor(){this._HttpClient=r(f)}getAllSubCategories(i){return this._HttpClient.get(`${v.baseUrl}/api/v1/categories/${i}/subcategories`)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var x=(e,t)=>t._id;function A(e,t){if(e&1&&(n(0,"div",4)(1,"h3",5),l(2),a()()),e&2){let h=t.$implicit;c(2),g(h.name)}}var R=(()=>{let t=class t{constructor(){this._SubcategoryService=r(y),this._ActivatedRoute=r(S),this.detailsSubCategory=[]}ngOnInit(){this.gettSubCategoriesSubscription=this._ActivatedRoute.paramMap.subscribe({next:i=>{let o=i.get("id");this.getttSubCategoriesSubscription=this._SubcategoryService.getAllSubCategories(o).subscribe({next:s=>{this.detailsSubCategory=s.data,console.log(this.detailsSubCategory)}})},error:i=>{console.log(i)}})}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=u({type:t,selectors:[["app-subcategory"]],standalone:!0,features:[b],decls:7,vars:0,consts:[[1,"my-4"],[1,"container"],[1,"text-main","text-center","my-3","fw-bold"],[1,"row","g-4","justify-content-center"],[1,"col-md-3","mx-2","border"],[1,"text-center","fw-bolder","py-3"]],template:function(o,s){o&1&&(n(0,"section",0)(1,"div",1)(2,"h2",2),l(3,"All Sub Categories"),a(),n(4,"div",3),d(5,A,3,1,"div",4,x),a()()()),o&2&&(c(5),p(s.detailsSubCategory))}});let e=t;return e})();export{R as a};
