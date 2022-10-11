//
//  DetailsActivity.swift
//  ProjectSlamIos
//
//  Created by Loris Poilly on 05/10/2022.
//

import UIKit

class DetailsActivity: UIViewController, UITableViewDelegate, UITableViewDataSource {
    
    var nameActivity: String = ""
    var descriptionActivity: String = ""
    var durationActivity: Int = 0
    var hoursActivity: Int = 0
    var dateActivity: String = ""
    var usersActivity: [String] = []
    var maxUsersActivity: Int = 0
    var idSiteActivity: Int = 0

    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 4
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "TableViewCell", for: indexPath)
        if indexPath[1] == 0 {
            cell.textLabel?.text = "Durée : \(durationActivity) minutes"
        } else if indexPath[1] == 1 {
            cell.textLabel?.text = "Heure : \(hoursActivity)h"
        } else if indexPath[1] == 2 {
            cell.textLabel?.text = "Date : \(dateActivity)"
        } else if indexPath[1] == 3 {
            cell.textLabel?.text = "Participants : \(usersActivity.count)/\(maxUsersActivity)"
        }
        cell.accessoryType = .detailButton
        cell.backgroundColor = .secondarySystemGroupedBackground
        return cell
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        tableView.deselectRow(at: indexPath, animated: true)
    }
    
    
    @IBOutlet weak var DescriptionActivity: UILabel!
    @IBOutlet weak var LabelActivityTop: UILabel!
    @IBOutlet weak var tableView: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()

        view.addSubview(tableView)
        tableView.register(UITableViewCell.self, forCellReuseIdentifier: "TableViewCell")
        tableView.layer.cornerRadius = 10
        tableView.dataSource = self
        tableView.delegate = self
        
        LabelActivityTop.text = nameActivity
        DescriptionActivity.lineBreakMode = NSLineBreakMode.byWordWrapping
        DescriptionActivity.text = descriptionActivity
    }
    
    @IBAction func ClosePage() {
        dismiss(animated: true)
    }
}
