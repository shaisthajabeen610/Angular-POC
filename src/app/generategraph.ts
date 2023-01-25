// let Highcharts = require('highcharts');


// generateGraph: typeof Highcharts = Highcharts;

// chartOptions: Highcharts.Options ={
//     chart: {
//         backgroundColor: 'white',
//         events: {
//           load: function () {
    
//             // Draw the flow chart
//             var ren = this.renderer,
//               colors = Highcharts.getOptions().colors,
//               rightArrow = ['M', 0, 0, 'L', 100, 0, 'L', 95, 5, 'M', 100, 0, 'L', 95, -5],
//               leftArrow = ['M', 100, 0, 'L', 0, 0, 'L', 5, 5, 'M', 0, 0, 'L', 5, -5];
    
    
//             // Separator, client from service
//             ren.path(['M', 120, 40, 'L', 120, 330])
//               .attr({
//                 'stroke-width': 2,
//                 stroke: 'silver',
//                 dashstyle: 'dash'
//               })
//               .add();
    
//             // Separator, CLI from service
//             ren.path(['M', 420, 40, 'L', 420, 330])
//               .attr({
//                 'stroke-width': 2,
//                 stroke: 'silver',
//                 dashstyle: 'dash'
//               })
//               .add();
    
//             // Headers
//             ren.label('Front End client', 20, 40)
//               .css({
//                 fontWeight: 'bold'
//               })
//               .add();
//             ren.label('Backend Server', 220, 40)
//               .css({
//                 fontWeight: 'bold'
//               })
//               .add();
//             ren.label('Dependencies', 440, 40)
//               .css({
//                 fontWeight: 'bold'
//               })
//               .add();
    
//             // SaaS client label
//             ren.label('.NET client<br/>(browser or<br/>script)', 10, 82)
//               .attr({
//                 fill: colors[0],
//                 stroke: 'white',
//                 'stroke-width': 2,
//                 padding: 5,
//                 r: 5
//               })
//               .css({
//                 color: 'white'
//               })
//               .add()
//               .shadow(true);
    
//             // Arrow from SaaS client to Phantom JS
//             ren.path(rightArrow)
//               .attr({
//                 'stroke-width': 2,
//                 stroke: colors[3]
//               })
//               .translate(95, 95)
//               .add();
    
//             ren.label('Port using Number', 90, 75)
//               .css({
//                 fontSize: '10px',
//                 color: colors[3]
//               })
//               .add();
    
//             ren.label('DB Server Name', 210, 82)
//               .attr({
//                 r: 5,
//                 width: 100,
//                 fill: colors[1]
//               })
//               .css({
//                 color: 'white',
//                 fontWeight: 'bold'
//               })
//               .add();
    
//             // Arrow from Phantom JS to Batik
//             ren.path(['M', 250, 110, 'L', 250, 185, 'L', 245, 180, 'M', 250, 185, 'L', 255, 180])
//               .attr({
//                 'stroke-width': 2,
//                 stroke: colors[3]
//               })
//               .add();
    
//             ren.label('Port Number', 255, 120)
//               .css({
//                 color: colors[3],
//                 fontSize: '10px'
//               })
//               .add();
    
//             ren.label('Database', 210, 200)
//               .attr({
//                 r: 5,
//                 width: 100,
//                 fill: colors[1]
//               })
//               .css({
//                 color: 'white',
//                 fontWeight: 'bold'
//               })
//               .add();
    
//             // Arrow from Batik to SaaS client
//             ren
//               .path([
//                 'M', 235, 185,
//                 'L', 235, 155,
//                 'C', 235, 130, 235, 130, 215, 130,
//                 'L', 95, 130,
//                 'L', 100, 125,
//                 'M', 95, 130,
//                 'L', 100, 135
//               ])
//               .attr({
//                 'stroke-width': 2,
//                 stroke: colors[3]
//               })
//               .add();
    
//             ren.label('Port Using Number', 100, 110)
//               .css({
//                 color: colors[3],
//                 fontSize: '10px'
//               })
//               .add();
    
//             // Browser label
            
            
    
//             // Script label
//             ren.label('Script', 450, 82)
//               .attr({
//                 fill: colors[2],
//                 stroke: 'white',
//                 'stroke-width': 2,
//                 padding: 5,
//                 r: 5
//               })
//               .css({
//                 color: 'white',
//                 width: '100px'
//               })
//               .add()
//               .shadow(true);
    
//             // Arrow from Script to PhantomJS
//             ren.path(leftArrow)
//               .attr({
//                 'stroke-width': 2,
//                 stroke: colors[2]
//               })
//               .translate(330, 90)
//               .add();
    
//             ren.label('Command', 340, 70)
//               .css({
//                 color: colors[2],
//                 fontSize: '10px'
//               })
//               .add();
    
//             // Arrow from PhantomJS to Script
//             ren.path(rightArrow)
//               .attr({
//                 'stroke-width': 2,
//                 stroke: colors[2]
//               })
//               .translate(330, 100)
//               .add();
    
//             ren.label('Services', 330, 100)
//               .css({
//                 color: colors[2],
//                 fontSize: '10px'
//               })
//               .add();
    
    
//           }
//         }
//       },
//       title: {
//         text: 'Server Architecture',
//         style: {
//           color: 'black'
//         }
//       },
//       accessibility: {
//         typeDescription: 'Flowchart'
//       }
    
    


// }
