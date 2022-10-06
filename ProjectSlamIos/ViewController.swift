//
//  ViewController.swift
//  ProjectSlamIos
//
//  Created by Loris Poilly on 27/09/2022.
//

import UIKit

struct Category {
    let title: String
    let id: Int
}
private let data: [Category] = [
    Category(title: "Pelvoux", id: 1),
    Category(title: "Les deux Alpes", id: 2),

]

class ViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    @IBOutlet weak var tableView: UITableView!
    let tableViewData = Array(repeating: "Item", count: 10)
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return data.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "TableViewCell", for: indexPath)
        cell.textLabel?.text = data[indexPath.row].title
        // add chevron to the right
        cell.accessoryType = .disclosureIndicator
        cell.backgroundColor = .secondarySystemGroupedBackground
        return cell
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        tableView.deselectRow(at: indexPath, animated: true)
        let category = data[indexPath.row]
        
        let vc = storyboard?.instantiateViewController(identifier: "SecondViewController") as! SecondViewController
        vc.modalPresentationStyle = .fullScreen
        vc.nameVillage = category.title
        vc.idVillage = category.id
        present(vc, animated: true)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.addSubview(tableView)
        
        tableView.register(UITableViewCell.self, forCellReuseIdentifier: "TableViewCell")
        tableView.layer.cornerRadius = 10
        tableView.dataSource = self
        tableView.delegate = self
    }
}
